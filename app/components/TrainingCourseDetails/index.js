import React from 'react';
import {View, StyleSheet} from 'react-native';
import TrainingCourseDetails from './TrainingCourseDetails';

const CourseDetailsIndex = props => {
    return (
        <View style={styles.screen}>
            <TrainingCourseDetails {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})


export default CourseDetailsIndex;