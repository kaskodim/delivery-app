import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import Text from "antd/es/typography/Text";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("auth/login");
  }

  return <Text>Привет {data.user.email}</Text>;
}
