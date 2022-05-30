export const invalidClientId = (fnName) => ({
  errorType: 'Invalid or malformed client_id',
  code: 500,
  debugMsg: fnName,
});
export const invalidClientSecret = (fnName) => ({
  errorType: 'Invalid or malformed client_secret',
  code: 500,
  debugMsg: fnName,
});
export const invalidClientGrantType = (fnName) => ({
  errorType: 'Invalid or malformed grant_type',
  code: 500,
  debugMsg: fnName,
});
export const invalidScope = (fnName) => ({
  errorType: 'Invalid or malformed scope',
  code: 500,
  debugMsg: fnName,
});
export const invalidScopePermissions = (fnName) => ({
  errorType: 'Invalid or insuffceint Scope Permissions',
  code: 500,
  debugMsg: fnName,
});
export const invalidRefreshToken = (fnName) => ({
  errorType: 'Invalid or malformed refresh_token',
  code: '',
  debugMsg: fnName,
});
export const invalidAcessToken = (fnName) => ({
  errorType: 'Invalid or malformed access_token',
  code: 500,
  debugMsg: fnName,
});
export const invalidExpiry = (fnName) => ({
  errorType: 'Invalid or malformed expires_in',
  code: 500,
  debugMsg: fnName,
});
