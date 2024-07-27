import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetails from '../../../components/meetups/MeetupDetails';
import { Fragment } from 'react';

export default function MeetupDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails image={props.meetupData.image}
      title={props.meetupData.title} description={props.meetupData.description} address={props.meetupData.address} />
    </Fragment>
    
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://reactUser:UpendraReact25@reactdb.eoqd4ly.mongodb.net/meetups?retryWrites=true&w=majority&appName=reactDB");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
  console.log(selectedMeetup);

  return {
    props: {
      meetupData: { id: selectedMeetup._id.toString(), title: selectedMeetup.title, address: selectedMeetup.address, description: selectedMeetup.description, image: selectedMeetup.image }
    }
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://reactUser:UpendraReact25@reactdb.eoqd4ly.mongodb.net/meetups?retryWrites=true&w=majority&appName=reactDB");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking", // for dynamic paths
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
  };
}