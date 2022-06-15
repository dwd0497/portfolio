import { Heading } from "../components";
import { withLayout } from "../layout/Layout";

function Page404() {
  return (
    <>
      <Heading tag="h1">Ошибка 404</Heading>
    </>
  );
}

export default withLayout(Page404);
