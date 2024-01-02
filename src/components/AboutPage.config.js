import saad from '../images/saad.jpeg';
import RehanMobin from '../images/rehan-mobin.jpeg';
import danishAhmad from '../images/danish-ahmad.jpeg';
import mustajabAhmad from '../images/mustajab-ahmad.jpeg';
import tahaAhmad from '../images/taha-ahmad.png';

const TeamMembers = [
    {
        Name : 'Saad Ahmad The Legend',
        Destination : 'Front-End Lead',
        avatar : saad,
        socialLinks : {
            facebook : 'www.facebook.com' ,
            linkedin : 'www.linkedin.com'
        }
    } ,
    {
        Name : 'Rehan Mobin',
        Destination : 'Team Lead',
        avatar : RehanMobin,
        socialLinks : {
            facebook : 'www.facebook.com' ,
            linkedin : 'www.linkedin.com'
        }
    } ,
    {
        Name : 'Danish Ahmad',
        Destination : 'Team Lead',
        avatar : danishAhmad,
        socialLinks : {
            facebook : 'www.facebook.com' ,
            linkedin : 'www.linkedin.com'
        }
    } ,
    {
        Name : 'Mustajab Ahmad',
        Destination : 'Sr. Front-End Developer',
        avatar : mustajabAhmad,
        socialLinks : {
            facebook : 'www.facebook.com' ,
            linkedin : 'www.linkedin.com'
        }
    } ,
    {
        Name : 'Taha Ahmad',
        Destination : 'Front-End Developer',
        avatar : tahaAhmad,
        socialLinks : {
            facebook : 'www.facebook.com' ,
            linkedin : 'www.linkedin.com'
        }
    } ,
 
    // 'Taha Ahmad', 
    // 'Fahad Hussain', 
    // 'Saif Bin Zahid',
    // 'Syed Usama ',
    // 'Ahmad Tariq',
    // 'Abdul Basit',
    // 'Hamza Anjum',
    // 'Chandresh Malhi',
    // 'Jahanzaib Khan',
    // 'Hassan',
    // 'Muhammad Aman-ul-Hassan',
    // 'Muhammad Daniyal',
    // 'Sharjeel Ali',
    // 'Tauseef Hassan',
    // 'Usman Asif',
    // 'Kashif',
    // 'Ashok Kumar',
    // 'Haris Tariq',
    // 'Faisal Khalil',
    // 'Shah Farid Ata',
    // 'Umair Jameel',
    // 'Anas Dilshad'
  ];

//   TeamMembers.sort();
//   TeamMembers.sort(function (a, b) {
//     if (a.Name < b.Name) {
//       return -1;
//     }
//     if (a.Name > b.Name) {
//       return 1;
//     }
//     return 0;
//   });


TeamMembers.sort((a, b) => a.Name.localeCompare(b.Name));


export default TeamMembers;