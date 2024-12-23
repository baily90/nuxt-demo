import {
  imtPositionOptions,
  patchPositionOptions,
  patchCountOptions,
  lowEchoCountOptions,
  strongEchoCountOptions,
  mixedEchoCountOptions,
  stenosisPositionOptions,
  stenosisPercentOptions
} from './../../constants'


export const getTableData= ( report ) => {
  const res = {
    imt: undefined,
    imt_position: undefined,
    patch_position: undefined,
    patch_count: undefined,
    patch_size_long: undefined,
    patch_size_thick: undefined,
    low_echo_count: undefined,
    strong_echo_count: undefined,
    mixed_echo_count: undefined,
    stenosis_position: undefined,
    stenosis_percent: undefined
  }
  const diagData = report?.diagData ? JSON.parse(report?.diagData) : undefined

  if(diagData) {
    const left = diagData.left
    const right = diagData.right

    res.imt = {
      left: left?.has_patch === 1 ? '--' : `${left?.imt}mm`,
      right: right?.has_patch === 1 ? '--' : `${right?.imt}mm`,
      isLeftAbnormal: left?.has_patch === 2 && left?.imt >= 1.0,
      isRightAbnormal: right?.has_patch === 2 && right?.imt >= 1.0,
    }
    res.imt_position = {
      left: (left?.has_patch === 1 || ( left?.has_patch === 2 && left?.imt < 1.0 )) ? '--' : imtPositionOptions.find(item => item.value === left?.imt_position)?.label,
      right: (right?.has_patch === 1 || ( right?.has_patch === 2 && right?.imt < 1.0 )) ? '--' : imtPositionOptions.find(item => item.value === right?.imt_position)?.label,
      isLeftAbnormal: !(left?.has_patch === 1 || ( left?.has_patch === 2 && left?.imt < 1.0 )) && !!left?.imt_position,
      isRightAbnormal: !(right?.has_patch === 1 || ( right?.has_patch === 2 && right?.imt < 1.0 )) && !!right?.imt_position
    }
    res.patch_position = {
      left: left?.has_patch === 2 ? '无' : patchPositionOptions.find(item => item.value === left?.patch_position)?.label,
      right: right?.has_patch === 2 ? '无' : patchPositionOptions.find(item => item.value === right?.patch_position)?.label,
      isLeftAbnormal: left?.has_patch === 1 && !!left?.patch_position,
      isRightAbnormal: right?.has_patch === 1 && !!right?.patch_position
    }
    res.patch_count = {
      left: left?.has_patch === 2 ? '0' : patchCountOptions.find(item => item.value === left?.patch_count)?.label,
      right: right?.has_patch === 2 ? '0' : patchCountOptions.find(item => item.value === right?.patch_count)?.label,
      isLeftAbnormal: left?.has_patch === 1 && !!left?.patch_count,
      isRightAbnormal: right?.has_patch === 1 && !!right?.patch_count
    }
    res.patch_size_long = {
      left: left?.has_patch === 2 ? '--' : `${left?.patch_size_long}mm`,
      right: right?.has_patch === 2 ? '--' : `${right?.patch_size_long}mm`,
      isLeftAbnormal: left?.has_patch === 1 && !!left?.patch_size_long,
      isRightAbnormal: right?.has_patch === 1 && !!right?.patch_size_long
    }
    res.patch_size_thick = {
      left: left?.has_patch === 2 ? '--' : `${left?.patch_size_thick}mm`,
      right: right?.has_patch === 2 ? '--' : `${right?.patch_size_thick}mm`,
      isLeftAbnormal: left?.has_patch === 1 && !!left?.patch_size_thick,
      isRightAbnormal: right?.has_patch === 1 && !!right?.patch_size_thick
    }
    res.low_echo_count = {
      left: (left?.has_patch === 2 || left?.low_echo_count === 1) ? '0' : lowEchoCountOptions.find(item => item.value === left?.low_echo_count)?.label,
      right: (right?.has_patch === 2 || right?.low_echo_count === 1) ? '0' : lowEchoCountOptions.find(item => item.value === right?.low_echo_count)?.label,
      isLeftAbnormal: !(left?.has_patch === 2 || left?.low_echo_count === 1) && [2, 3].includes(left?.low_echo_count),
      isRightAbnormal: !(right?.has_patch === 2 || right?.low_echo_count === 1) && [2, 3].includes(right?.low_echo_count),
    }
    res.strong_echo_count = {
      left: (left?.has_patch === 2 || left?.strong_echo_count === 1) ? '0' : strongEchoCountOptions.find(item => item.value === left?.strong_echo_count)?.label,
      right: (right?.has_patch === 2 || right?.strong_echo_count === 1) ? '0' : strongEchoCountOptions.find(item => item.value === right?.strong_echo_count)?.label,
      isLeftAbnormal: !(left?.has_patch === 2 || left?.strong_echo_count === 1) && [2, 3].includes(left?.strong_echo_count),
      isRightAbnormal: !(right?.has_patch === 2 || right?.strong_echo_count === 1) && [2, 3].includes(right?.strong_echo_count),
    }
    res.mixed_echo_count = {
      left: (left?.has_patch === 2 || left?.mixed_echo_count === 1) ? '0' : mixedEchoCountOptions.find(item => item.value === left?.mixed_echo_count)?.label,
      right: (right?.has_patch === 2 || right?.mixed_echo_count === 1) ? '0' : mixedEchoCountOptions.find(item => item.value === right?.mixed_echo_count)?.label,
      isLeftAbnormal: !(left?.has_patch === 2 || left?.mixed_echo_count === 1) && [2, 3].includes(left?.mixed_echo_count),
      isRightAbnormal: !(right?.has_patch === 2 || right?.mixed_echo_count === 1) && [2, 3].includes(right?.mixed_echo_count),
    }
    res.stenosis_position = {
      left: (left?.has_patch === 2 || (left?.has_patch === 1 && left?.has_stenosis === 2)) ? '无' : stenosisPositionOptions.find(item => item.value === left?.stenosis_position)?.label,
      right: (right?.has_patch === 2 || (right?.has_patch === 1 && right?.has_stenosis === 2)) ? '无' : stenosisPositionOptions.find(item => item.value === right?.stenosis_position)?.label,
      isLeftAbnormal: !(left?.has_patch === 2 || (left?.has_patch === 1 && left?.has_stenosis === 2)) && !!left?.stenosis_position,
      isRightAbnormal: !(right?.has_patch === 2 || (right?.has_patch === 1 && right?.has_stenosis === 2)) && !!right?.stenosis_position
    }
    res.stenosis_percent = {
      left: (left?.has_patch === 2 || (left?.has_patch === 1 && left?.has_stenosis === 2)) ? '正常' : stenosisPercentOptions.find(item => item.value === left?.stenosis_percent)?.label,
      right: (right?.has_patch === 2 || (right?.has_patch === 1 && right?.has_stenosis === 2)) ? '正常' : stenosisPercentOptions.find(item => item.value === right?.stenosis_percent)?.label,
      isLeftAbnormal: !(left?.has_patch === 2 || (left?.has_patch === 1 && left?.has_stenosis === 2)) && [2, 3].includes(left?.stenosis_percent),
      isRightAbnormal: !(right?.has_patch === 2 || (right?.has_patch === 1 && right?.has_stenosis === 2)) && [2, 3].includes(right?.stenosis_percent)
    }
  }

  return res
}