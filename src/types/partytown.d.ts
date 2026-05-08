declare module "@builder.io/partytown/react" {
  import type { FC } from "react";

  interface PartytownProps {
    nonce?: string;
    debug?: boolean;
    forward?: string[];
    lib?: string;
    loadScriptsOnMainThread?: string[];
    [key: string]: unknown;
  }

  export const Partytown: FC<PartytownProps>;
}
