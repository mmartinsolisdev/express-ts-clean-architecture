import { Member, IMember } from '../../entities/member';
import mapper from '../mappers/memberMapper';

async function find() {
  try {
    let members = await Member.find().lean().exec();
    const result = members.map((member) => mapper(member));
    return result;
  } catch (e) {
    // console.log('Error: ', e);
  }
}

async function findMemberExist(data: any) {
  try {
    const query = {
      "name": data.name,
      "lastname": data.lastname,
      "birthdate": data.birthdate,
    };
    //console.log(query);
    let member = await Member.findOne(query).exec();
    return member;
  } catch (e) {
    // console.log('Error: ', e);
  }
}

async function findById(id: string) {
  try {
    //console.log("In repository =>", id)
    let member = await Member.findById(id).exec();
    let result = member ? await mapper(member): member;
    return result;
  } catch (e) {
    //console.log('Error: ', e);
  }
}

async function save(data: any) {
  try {
    //console.log("repositoryData => ", data);
    let member = new Member({
      name: data.name,
      lastname: data.lastname,
      birthdate: data.birthdate,
      sex: data.sex,
      comments: data.comments,
      email: data.email,
      cellphone: data.cellphone,
      homephone: data.homephone,
      address: data.address,
      status: data.status,
      picture: data.picture,
      emergencyContact: data.emergencyContact,
      relationship: data.relationship,
      contactEmail: data.contactEmail,
      contactCellPhone: data.contactCellPhone,
      contactHomePhone: data.contactHomePhone,
      medicalInformation: data.medicalInformation
    })
    let newMember = await member.save();
    let result = await mapper(newMember);
    return result;
  } catch (e) {
    // console.log('Error: ', e);
  }
}


async function update(id: string, data: any) {
  try {
    //console.log("In repository =>", id, data)
    let member = await Member.findByIdAndUpdate(id, data, { new: true })
    let result = member ? await mapper(member): member;
    return result;
  } catch (e) {
    // console.log('Error: ', e);
  }
}

const memberRepository = {
  find,
  save,
  findMemberExist,
  findById,
  update
};
export default memberRepository;
