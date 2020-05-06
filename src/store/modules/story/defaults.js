/*
Defaults for newly-created objects.
*/

import {deviceType} from 'detect-it';
import {t} from '@/util/i18n';

export const storyDefaults = {
	name: t('store.storyDefaults.name'),
	script: '',
	snapToGrid: false,
	startPassage: '',
	storyFormat: '',
	storyFormatVersion: '',
	stylesheet: '',
	zoom: 1
};

export const passageDefaults = {
	height: 100,
	highlighted: false,
	left: 0,
	name: t('store.passageDefaults.name'),
	selected: false,
	story: '',
	tags: [],
	text:
		deviceType === 'touchOnly'
			? t('store.passageDefaults.textClick')
			: t('store.passageDefaults.textTouch'),
	top: 0,
	width: 100
};
