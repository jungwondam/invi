import { Card, CardFooter, Image, Button } from "@nextui-org/react";

interface IDesignCard {
    id: number;
    name: string;
    src: string;
}
export const DesignCard = ({ id, name, src }: IDesignCard) => {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={400}
                src={src}
                width={300}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{name}</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    미리보기
                </Button>
            </CardFooter>
        </Card>

    );
};