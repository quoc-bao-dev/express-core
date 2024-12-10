import { ApiResponse, Pagination } from './ApiResponse';

export const createResponse = (status: number, message: string, data: any) => {
    return ApiResponse.create(status, message, data);
};

export const createPaginationResponse = (
    status: number,
    message: string,
    data: any,
    pagination: Pagination
) => {
    return ApiResponse.create(status, message, data, pagination);
};

export { errorHandler, wrapAsync } from './handler';
