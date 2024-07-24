import MainNavigation from '../components/MainNavigation';

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occurred!</h1>
        <p>Could Not find this page!</p>
      </main>
    </>
  );
}