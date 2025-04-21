
import { auth } from "../../../utils/auth";
import SignOut from "../ui/Sign-out";
import SignIn from "../ui/Sing-in";
import { ThemeToggle } from "../ui/ToggleTheme"


interface HeaderProps {
    title:string
}
export default async function Header({ title }: HeaderProps) {
  const sesstion = await auth();
  return (
      <header className="border-b-1 border-gray-100 p-4">
        <div className="flex justify-between items-center container mx-auto">
          <h1 className="text-3xl font-[200] dark:text-red-50">{title}</h1>
          <div className="flex items-center gap-5">
            <ThemeToggle/>
            {!sesstion ? <SignIn/> : <SignOut/>}
          </div>
        </div>
      </header>
  );
}