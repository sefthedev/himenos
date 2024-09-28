package com.kady.accounts.config;

import org.springframework.security.authentication.AbstractAuthenticationToken;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {

    private final String principal;
    private String credentials;

    public JwtAuthenticationToken(String principal, String credentials, Object details) {
        super(null);
        this.principal = principal;
        this.credentials = credentials;
        setDetails(details);
    }

    @Override
    public String getCredentials() {
        return this.credentials;
    }

    @Override
    public String getPrincipal() {
        return this.principal;
    }

    @Override
    public boolean isAuthenticated() {
        return true;
    }
}