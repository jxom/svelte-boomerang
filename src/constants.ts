import type { TCacheStrategy, TFetchStrategy, TLoadingState } from './types';

export const CACHE_STRATEGIES: { [key: string]: TCacheStrategy } = {
  CONTEXT_ONLY: 'context-only',
  CONTEXT_AND_ARGS: 'context-and-args',
};
export const FETCH_STRATEGIES: { [key: string]: TFetchStrategy } = {
  FETCH_ONLY: 'fetch-only',
  CACHE_ONLY: 'cache-only',
  CACHE_FIRST: 'cache-first',
  CACHE_AND_FETCH: 'cache-and-fetch',
};
export const STATES: { [key: string]: TLoadingState } = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADING_SLOW: 'loading-slow',
  RELOADING: 'reloading',
  RELOADING_SLOW: 'reloading-slow',
  SUCCESS: 'success',
  ERROR: 'error',
};
