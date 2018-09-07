import { createFeatureSelector } from '@ngrx/store';

import { SettingsState, State } from '@app/settings/settings.model';

export const selectSettings = createFeatureSelector<State, SettingsState>(
  'settings'
);
