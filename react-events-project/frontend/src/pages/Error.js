import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong.";

  if (error.status === 500) {
    // Parse data if Response object is used
    // message = JSON.parse(error.data).message;
    
    // No nned to parse for json()
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find page or resource.";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}