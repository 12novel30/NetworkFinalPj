package com.network.spring.Network.ErrorHandling;

import lombok.Getter;

@Getter
public class DefaultException extends RuntimeException{
    private ErrorCode errorCode;
    private String detailMessage;

    public DefaultException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.detailMessage = errorCode.getMessage();
    }

    public DefaultException(String message, ErrorCode errorCode){
        super(message);
        this.errorCode = errorCode;
    }

}
