import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

/* const DUMMY_MEETUPS = [
  { id: "m1", title: "A First Meetup", address: "Pune, India", description: "The first meetup",
    image: "https://th.bing.com/th/id/R.7383028831604862ec47fefee3e8f43f?rik=JvqjDCfPocchLg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fimages-of-nature-4.jpg&ehk=%2b1REJDS0cEPD0z2IP%2fddCyP9IgFz6xVpp8fyQr78SJ0%3d&risl=&pid=ImgRaw&r=0" 
  },
  { id: "m2", title: "A Second Meetup", address: "Mumbai, India", description: "The second meetup",
    image: "https://c.pxhere.com/photos/d1/ac/cascade_cloudy_environment_falls_lake_landscape_mountain_range_mountains-1174399.jpg!d" 
  },
]; */

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>NextJS Meetups</title>
        <meta name="description" content="Browse a huge list of highly active NextJS Meetups." />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

//Page is generated for every request
/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}
 */

//Runs while npm run build to generate static page with data
export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect("mongodb+srv://reactUser:UpendraReact25@reactdb.eoqd4ly.mongodb.net/meetups?retryWrites=true&w=majority&appName=reactDB");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({ title: meetup.title, address: meetup.address, image: meetup.image, id: meetup._id.toString() }))
    },
    revalidate: 10 // To re-evaluate page after metioned time
  };
}