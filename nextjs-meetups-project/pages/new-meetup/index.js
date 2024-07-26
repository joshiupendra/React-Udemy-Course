import { useRouter } from 'next/router';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enteredMeetupData)
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>New Meetup</title>
        <meta name="description" content="Add your own Meetups and lets connect." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
  );
}