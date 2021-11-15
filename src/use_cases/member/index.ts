import repository from '../../repositories/implementation/MemberRepository'
import getMembers from './getMembers';
import getMember from './getMember';
import addMember from './addMember';
import updateMember from './updateMember';

const getMembs = getMembers(repository);
const getMemb = getMember(repository);
const addMemb = addMember(repository);
const updateMemb = updateMember(repository);

// user use case
const memberUC = {
  getMembs,
  getMemb,
  addMemb,
  updateMemb
};

export default memberUC;
