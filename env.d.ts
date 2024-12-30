declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_OPENAI_API_KEY?: string; // For client-side usage (prefix with NEXT_PUBLIC_)
      OPENAI_API_KEY: string; // For server-side usage
    }
  }
  