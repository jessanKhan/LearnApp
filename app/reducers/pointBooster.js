import actionType from '../constants/constants';
import {ActivityIndicator} from 'react-native-paper';

const initialState = {
  total_point: 0,
  training_course: 0,
  origins_of_blockchain: 0,
  what_is_blockchain: 0,
  purpose_of_blockchain: 0,
  peer_to_peer_network_and_nodes: 0,
  consensus_rules: 0,
  cryptographic_key_and_digital_structure: 0,
  trainsection: 0,
  proof_of_work_and_proof_of_stake: 0,
  characteristics_of_cryptocurrency: 0,
  how_to_profit_from_invest_in_ICO: 0,
  crypto_airdrop: 0,
  is_ICO_to_be_replaced_by_IEO: 0,
  Top_100_crypto_currency: 0,
};
// GetN_Data: 0, UnGetN_Data: 0, For newly implemneted news
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RETRIVEPIONTBOOSTER:
      return {
        ...state,
        loader: true,
      };
    case actionType.LOADCRYPTOPOINT:
      return {
        ...state,
        total_point: action.total_point,
        training_course: action.training_course,
        origins_of_blockchain: action.origins_of_blockchain,
        what_is_blockchain: action.what_is_blockchain,
        purpose_of_blockchain: action.purpose_of_blockchain,
        peer_to_peer_network_and_nodes: action.peer_to_peer_network_and_nodes,
        consensus_rules: action.consensus_rules,
        cryptographic_key_and_digital_structure:
          action.cryptographic_key_and_digital_structure,
        trainsection: action.trainsection,
        proof_of_work_and_proof_of_stake:
          action.proof_of_work_and_proof_of_stake,
        characteristics_of_cryptocurrency:
          action.characteristics_of_cryptocurrency,
        how_to_profit_from_invest_in_ICO:
          action.how_to_profit_from_invest_in_ICO,
        crypto_airdrop: action.crypto_airdrop,
        is_ICO_to_be_replaced_by_IEO: action.is_ICO_to_be_replaced_by_IEO,
        Top_100_crypto_currency: action.Top_100_crypto_currency,
      };

    default: {
      return state;
    }
  }
};

export default homeReducer;
