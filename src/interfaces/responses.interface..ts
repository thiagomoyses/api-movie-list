export interface ResponsesInterface {
    success: boolean,
    message: string,
    data: Record<string, any> | null,
    status: number
}