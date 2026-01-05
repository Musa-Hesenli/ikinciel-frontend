export interface User {
  nameIdentifier: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  balance: string;
  roles: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
}

export interface LoginResponse {
  message: string;
  info: User;
}

export interface RegisterResponse {
  message: string;
  info: User;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
}
