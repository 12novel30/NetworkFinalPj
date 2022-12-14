package com.network.spring.Network.ErrorHandling;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    NOT_FOUND(404,"COMMON-ERR-404","PAGE NOT FOUND"),
    INTER_SERVER_ERROR(500,"COMMON-ERR-500","INTER SERVER ERROR"),

    NO_USER(500, "USER-ERR-500", "There is no corresponding USER."),
    NO_PLACE(500, "PLACE-ERR-500", "There is no corresponding PLACE."),
    WRONG_EMAIL(500,"LOGIN-ERR-500","There is no such email information."),
    WRONG_PASSWORD(500, "LOGIN-ERR-500","Invalid password."),

    ALREADY_EXISTED(500, "CREATE-PERSON-ERR-500","have already been invited."),
    ALREADY_REGISTERED(500, "CREATE-USER-ERR-500","is already registered."),


    CREATE_FAIL(500, "CREATE-ERR-500", "Failed to create entity on request."),

    DELETE_FAIL(500, "DELETE-ERR-500", "Failed to delete entity on request.");


    private int status;
    private String errorCode;
    private String message;

}
