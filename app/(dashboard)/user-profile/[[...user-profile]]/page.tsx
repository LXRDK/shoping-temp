import { SignOutButton, UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const UserProfilePage = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return (
    <div>
      <UserProfile
        path="/user-profile"
        appearance={{ elements: { formContainer: "@apply w-full" } }}
      />
      <div className="w-full bg-red-500 text-white text-xl font-bold flex items-center justify-end px-4">
        <SignOutButton />
      </div>
    </div>
  );
};

export default UserProfilePage;
