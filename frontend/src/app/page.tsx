import { redirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/routing";

export default function RootPage() {
  console.log(DEFAULT_LOCALE)
  return redirect(`/${DEFAULT_LOCALE}/`);
}
