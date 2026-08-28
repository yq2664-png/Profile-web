import WearableContent from './WearableContent';
import IdeationContent from './IdeationContent';
import BiomaterialContent from './BiomaterialContent';
import SensoryContent from './SensoryContent';
import SyntheticContent from './SyntheticContent';
import UndergraduateContent from './UndergraduateContent';
import UOSContent from './UOSContent';
import SignalContent from './SignalContent';

export const projectContentMap = {
  signal: SignalContent,
  'user-os': UOSContent,
  wearable: WearableContent,
  ideation: IdeationContent,
  biomaterial: BiomaterialContent,
  sensory: SensoryContent,
  synthetic: SyntheticContent,
  undergraduate: UndergraduateContent,
};
