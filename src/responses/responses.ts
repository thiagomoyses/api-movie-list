export class Responses {
    sendResponse(success: boolean, message: string, data: Record<string, any> | null = null){
        return {
            success: success,
            message: message,
            data: data
        }
    }
}