// Type definitions for pg-copy-streams

/// <reference types="pg" />

declare module 'pg-copy-streams' {

    import pg from 'pg';
  
    export function from(query: string): pg.Submittable;
  
  }
  