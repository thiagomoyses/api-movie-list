export class Responses {
    sendResponse(success: boolean, message: string, data: Record<string, any> | null = null, status: number = 200){
        return {
            success: success,
            message: message,
            data: data,
            status: status
        }
    }
}