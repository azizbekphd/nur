import { useSession } from "@supabase/auth-helpers-react";

const useAuthSession = () => {
  const session = useSession();
  const user = session?.user;

  return {
    session: session,
    hasMetadata: !["name", "lastName", "birthdate"]
      .map((p) => user?.user_metadata.hasOwnProperty(p))
      .includes(false),
  };
};

export default useAuthSession;
