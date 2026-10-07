// Allows for env vars set via .env file (local) or injected at run time (deployed)

export const env = {
      VITE_TIME_UPDATE_COMPLETE:
      window?.config?.VITE_TIME_UPDATE_COMPLETE ??
      import.meta.env.VITE_TIME_UPDATE_COMPLETE ??
      "",
}