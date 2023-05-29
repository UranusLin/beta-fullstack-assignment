import React from 'react';
import Text from "@/components/shared/text";
import HorizontalLine from "@/components/shared/horizontalLine";

interface TextProps {
    text: string;
    size: string;
    other: string;
}

const Content: React.FC = () => {
    const texts: TextProps[] = [
        {text: `Lorem ipsum dolor sit amet`, size: `text-sm`, other: `font-semibold absolute top-10 left-10 `},
        {text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, size: `text-sm`, other: `absolute top-70 left-10 right-10`},
        {text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`, size: `text-sm`, other: `font-semibold absolute top-238 left-10 `},
        {text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`, size: `text-sm`, other: `absolute left-10 right-10 top-268 pt-1.5`}
    ];

    return (
        <div className={`relative h-500 w-884 bg-white rounded-xl`}>
            {texts.map((text, index) => (
                <div key={index}>
                    <Text text={text.text} size={text.size} other={text.other} />
                </div>
            ))}
            <div className={`absolute top-214 right-10`}>
                <HorizontalLine width={`w-804`} />
            </div>
        </div>
    )
};

export default Content;
