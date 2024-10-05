import { redirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/routing";

export default function RootPage() {
  return redirect(`/${DEFAULT_LOCALE}/`);
}
