import { Heading } from "../components";
import { withLayout } from "../layout/Layout";

function Page500() {
  return (
    <>
      <Heading tag="h1">Ошибка 500</Heading>
    </>
  );
}

export default withLayout(Page500);
