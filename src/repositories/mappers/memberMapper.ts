import { memberDTO } from '../dtos/memberDTO'


const mapper = (member: any) => {
  const dto: memberDTO = {
    id: member._id,
    name: member.name,
    lastname: member.lastname,
    birthdate: member.birthdate,
    sex: member.sex,
    comments: member.comments,
    email: member.email,
    cellphone: member.cellphone,
    homephone: member.homephone,
    address: member.address,
    status: member.status,
    picture: member.picture,
    emergencyContact: member.emergencyContact,
    relationship: member.relationship,
    contactEmail: member.contactEmail,
    contactCellPhone: member.contactCellPhone,
    contactHomePhone: member.contactHomePhone,
    medicalInformation: member.medicalInformation
  }
  return dto;
}

// async function mapper (member:any) {
//     //console.log(member)
//     const dto: memberDTO = {
//       name: member.name,
//       lastname: member.lastname,
//       birthdate: member.birthdate,
//       sex: member.sex,
//       comments: member.comments,
//       email: member.email,
//       cellphone: member.cellphone,
//       homephone: member.homephone,
//       address: member.address,
//       status: member.status,
//       picture: member.picture,
//       emergencyContact: member.emergencyContact,
//       relationship: member.relationship,
//       contactEmail: member.contactEmail,
//       contactCellPhone: member.contactCellPhone,
//       contactHomePhone: member.contactHomePhone,
//       medicalInformation: member.medicalInformation
//     }
//   return dto;
// }

export default mapper;
