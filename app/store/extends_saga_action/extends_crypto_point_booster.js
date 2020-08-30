import {takeEvery, select, call, put} from 'redux-saga/effects';
import {
  get_LocalStorage_for_CryptoPointBooster,
  set_Update_LocalStorage_for_CryptoPointBooster,
} from './New_DB_Collection';

import actionType from '../../constants/constants';

// retrive data from database
export const _retriveCryptoPoint = function*(action) {
  try {
    let _result;
    const DB_point = yield call(get_LocalStorage_for_CryptoPointBooster);

    if (DB_point == null) {
      _result = {
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
    } else {
      _result = {
        total_point: DB_point['total_point'],
        training_course: DB_point['training_course'],
        origins_of_blockchain: DB_point['origins_of_blockchain'],
        what_is_blockchain: DB_point['what_is_blockchain'],
        purpose_of_blockchain: DB_point['purpose_of_blockchain'],
        peer_to_peer_network_and_nodes:
          DB_point['peer_to_peer_network_and_nodes'],
        consensus_rules: DB_point['consensus_rules'],
        cryptographic_key_and_digital_structure:
          DB_point['cryptographic_key_and_digital_structure'],
        trainsection: DB_point['trainsection'],
        proof_of_work_and_proof_of_stake:
          DB_point['proof_of_work_and_proof_of_stake'],
        characteristics_of_cryptocurrency:
          DB_point['characteristics_of_cryptocurrency'],
        how_to_profit_from_invest_in_ICO:
          DB_point['how_to_profit_from_invest_in_ICO'],
        crypto_airdrop: DB_point['crypto_airdrop'],
        is_ICO_to_be_replaced_by_IEO: DB_point['is_ICO_to_be_replaced_by_IEO'],
        Top_100_crypto_currency: DB_point['Top_100_crypto_currency'],
      };
    }

    return _result;
  } catch (error) {
    console.log('error is _retriveCryptoPoint ', error);
  }
};

export const _CrptoBoosterChecker = function*(action) {
  try {
    const DB_point = yield call(_retriveCryptoPoint);
    yield put({
      type: actionType.LOADCRYPTOPOINT,
      total_point: DB_point['total_point'],
      training_course: DB_point['training_course'],
      origins_of_blockchain: DB_point['origins_of_blockchain'],
      what_is_blockchain: DB_point['what_is_blockchain'],
      purpose_of_blockchain: DB_point['purpose_of_blockchain'],
      peer_to_peer_network_and_nodes:
        DB_point['peer_to_peer_network_and_nodes'],
      consensus_rules: DB_point['consensus_rules'],
      cryptographic_key_and_digital_structure:
        DB_point['cryptographic_key_and_digital_structure'],
      trainsection: DB_point['trainsection'],
      proof_of_work_and_proof_of_stake:
        DB_point['proof_of_work_and_proof_of_stake'],
      characteristics_of_cryptocurrency:
        DB_point['characteristics_of_cryptocurrency'],
      how_to_profit_from_invest_in_ICO:
        DB_point['how_to_profit_from_invest_in_ICO'],
      crypto_airdrop: DB_point['crypto_airdrop'],
      is_ICO_to_be_replaced_by_IEO: DB_point['is_ICO_to_be_replaced_by_IEO'],
      Top_100_crypto_currency: DB_point['Top_100_crypto_currency'],
    });
  } catch (error) {
    console.log('error is _CrptoBoosterChecker ', error);
  }
};

const value_is = (v_1, v_2) => {
  return v_1 + v_2;
};

export const _CrptoBoosterUpdate = function*(action) {
  try {
    const DB_point = yield call(_retriveCryptoPoint);

    let _result_value = value_is(
      parseInt(action.old_value),
      parseInt(action.new_value),
    );

    //parseInt(action.value) + parseInt(DB_point[action.name]);

    let total_value =
      parseInt(action.new_value) + parseInt(DB_point['total_point']);

    DB_point[action.name] = _result_value;
    DB_point['total_point'] = total_value;

    action.name !== 'Top_100_crypto_currency'
      ? (DB_point['training_course'] =
          parseInt(DB_point['training_course']) + parseInt(action.new_value))
      : null;

    const update_DB = yield call(
      set_Update_LocalStorage_for_CryptoPointBooster,
      DB_point,
    );

    console.log('value', DB_point, DB_point['total_point']);
    yield put({
      type: actionType.LOADCRYPTOPOINT,
      total_point: DB_point['total_point'],
      training_course: DB_point['training_course'],
      origins_of_blockchain: DB_point['origins_of_blockchain'],
      what_is_blockchain: DB_point['what_is_blockchain'],
      purpose_of_blockchain: DB_point['purpose_of_blockchain'],
      peer_to_peer_network_and_nodes:
        DB_point['peer_to_peer_network_and_nodes'],
      consensus_rules: DB_point['consensus_rules'],
      cryptographic_key_and_digital_structure:
        DB_point['cryptographic_key_and_digital_structure'],
      trainsection: DB_point['trainsection'],
      proof_of_work_and_proof_of_stake:
        DB_point['proof_of_work_and_proof_of_stake'],
      characteristics_of_cryptocurrency:
        DB_point['characteristics_of_cryptocurrency'],
      how_to_profit_from_invest_in_ICO:
        DB_point['how_to_profit_from_invest_in_ICO'],
      crypto_airdrop: DB_point['crypto_airdrop'],
      is_ICO_to_be_replaced_by_IEO: DB_point['is_ICO_to_be_replaced_by_IEO'],
      Top_100_crypto_currency: DB_point['Top_100_crypto_currency'],
    });
  } catch (error) {
    console.log('error is _CrptoBoosterUpdate ', error);
  }
};
