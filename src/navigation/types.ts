import { StackScreenProps } from "@react-navigation/stack";

export type ParkingsStackParamsList = {
    parkingList: undefined,
    parkingWeb: { url: string; },
}

export type ParkingsScreenProps<T extends keyof ParkingsStackParamsList> = StackScreenProps<ParkingsStackParamsList, T>

// Hooks - useNavigation
declare global {
    namespace ReactNavigation {
        interface RootParamList extends ParkingsStackParamsList {}
    }
}
