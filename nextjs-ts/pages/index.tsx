import { GetStaticProps } from "next";
import { Button, Heading, Paragraph, Rating, Tag, Textarea } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menuItem.interface";
import { Input } from "../components/Input/Input";
import { API } from "../helpers/api";

function Home({menu}: IHomePage) {
  const [rating, setRaring] = useState<number>(1);

  return (
    <>
      <Heading tag="h1">Заголовок</Heading>
      <Button arrow="right">Кнопка</Button>
      <Button appearance="second" arrow="down">Нажать</Button>
      <Paragraph size="s">Параграф s</Paragraph>
      <Paragraph>Параграф m</Paragraph>
      <Paragraph size="l">Параграф l</Paragraph>
      <Tag tagColor="ghost">ghost</Tag>
      <Tag size="m" tagColor="red">red</Tag>
      <Tag tagColor="gray">gray</Tag>
      <Tag size="m" tagColor="green">green</Tag>
      <Tag tagColor="brand">brand</Tag>
      <div>
        <br/>
        <Rating rating={rating} setRating={setRaring} isEditable />
      </div>
      <br/>
      <div>
        <Input placeholder="Тест"/>
      </div>
      <br/>
      <div>
        <Textarea placeholder="Тест"/>
      </div>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomePage> = async () => {
  const topLevelCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory: topLevelCategory
  });

  return {
    props: {
      menu,
      topLevelCategory
    }
  };
};

interface IHomePage extends Record<string, unknown> {
  menu: IMenuItem[],
  topLevelCategory: number
}
