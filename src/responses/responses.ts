import { ResponsesInterface } from "../interfaces";

export class Responses {

    accessDenied(message: string = "Access denied!"): ResponsesInterface {
        const payload = {
            success: false,
            message: message,
            data: null,
            status: 403
        }

        return this.sendResponse(payload.success, payload.message, payload.data, payload.status);
    }

    accessGranted(message: string = "Access granted!", data: Record<string, any> | null = null): ResponsesInterface {
        const payload = {
            success: true,
            message: message,
            data: data,
            status: 200
        }

        return this.sendResponse(payload.success, payload.message, payload.data, payload.status);
    }

    internalError(): ResponsesInterface {
        const payload = {
            success: false,
            message: "Internal error!",
            data: null,
            status: 500
        }

        return this.sendResponse(payload.success, payload.message, payload.data, payload.status);
    }

    sendResponse(success: boolean, message: string, data: Record<string, any> | null = null, status: number = 200): ResponsesInterface {
        return {
            success: success,
            message: message,
            data: data,
            status: status
        }
    }
}