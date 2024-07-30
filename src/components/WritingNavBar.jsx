import {Button} from "@/components/ui/button.jsx";
import {ChevronLeftIcon} from "@radix-ui/react-icons";

export default function WritingNavBar(){
	return (
		<header className="w-full flex items-center justify-start space-x-2">
			<a href="/">
				<Button variant="outline" size="icon">
					<ChevronLeftIcon className="w-4 h-4 text-black" />
				</Button>
			</a>
		</header>
	)
}