import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  { id: "m1", title: "A First Meetup", address: "Pune, India", description: "The first meetup",
    image: "https://th.bing.com/th/id/R.7383028831604862ec47fefee3e8f43f?rik=JvqjDCfPocchLg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fimages-of-nature-4.jpg&ehk=%2b1REJDS0cEPD0z2IP%2fddCyP9IgFz6xVpp8fyQr78SJ0%3d&risl=&pid=ImgRaw&r=0" 
  },
  { id: "m2", title: "A Second Meetup", address: "Mumbai, India", description: "The second meetup",
    image: "https://c.pxhere.com/photos/d1/ac/cascade_cloudy_environment_falls_lake_landscape_mountain_range_mountains-1174399.jpg!d" 
  },
];

export default function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
}