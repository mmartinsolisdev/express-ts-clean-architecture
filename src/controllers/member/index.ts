import memberUC from '../../use_cases/member'
import getMembs from './getMembers';
import getMemb from './getMember';
import addMember from './addMember';
import updateMemb from './updateMember';

const getMembers = getMembs(memberUC.getMembs);
const getMember = getMemb(memberUC.getMemb);
const addMemb = addMember(memberUC.addMemb);
const updateMember = updateMemb(memberUC.updateMemb);

const memberController = {
  getMembers,
  getMember,
  addMemb,
  updateMember
};


export default memberController;
