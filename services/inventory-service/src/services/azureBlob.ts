import { v4 } from 'uuid';
import { BlockBlobClient } from '@azure/storage-blob';
import { Readable } from 'stream';

/**
 * @param binary Buffer
 * returns readableInstanceStream Readable
 */
function bufferToStream(binary: Buffer) {

    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });

    return readableInstanceStream;
}

const getFilename = (file: Express.Multer.File) =>`${v4()}-${Date.now()}.${file.mimetype.split('/')[1]}`;

export const uploadFileToAzure = async (file: Express.Multer.File): Promise<string | undefined>=>{
    try{
        const blobName = getFilename(file);
        const blobService = new BlockBlobClient(process.env.AZURE_STORAGE_CONNECTION_STRING as string,"productimages",blobName);
        const stream = bufferToStream(file.buffer);
        const streamLength = file.buffer.length;
        await blobService.uploadStream(stream, streamLength);
        return blobService.url;
    }catch(err){
        console.log('error in uploading image to azure blob', err);
        return undefined;
    } 
}