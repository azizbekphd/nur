import { useSession } from "@supabase/auth-helpers-react";

const useAuthSession = () => useSession();

export default useAuthSession;
