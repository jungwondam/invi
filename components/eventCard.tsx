import { Card, CardHeader, Image } from "@nextui-org/react";
import { BadgePlus, PencilLine } from "lucide-react";

interface IEventCard {
    addEvent?: boolean;
    title?: string;
    lastModified?: string;
}
export const EventCard = ({ addEvent = false, title, lastModified }: IEventCard) => {
    return (
        <div className="flex align-item">
            {addEvent
                ?
                <Card className="min-w-[60px] flex items-center justify-center">
                    <PencilLine size={24} />
                </Card>
                : <>
                    <Card className="min-w-[200px]" >
                        <CardHeader className="flex gap-3">
                            <>
                                <Image
                                    alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={40}
                                />
                                <div className="flex flex-col">
                                    <p className="text-md">{title}</p>
                                    <p className="text-small text-default-500">{lastModified}</p>
                                </div>
                            </>
                        </CardHeader>
                    </Card >
                </>}
        </div>
    );
};
