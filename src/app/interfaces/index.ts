export interface InstagramScraperApi {
  data: Data;
  pagination_token: string;
}
interface Data {
  count: number;
  items: Item[];
}
export interface Item {
  accessibility_caption?: any;
  caption_hashtags: string[];
  caption_mentions: string[];
  caption_text: string;
  clips_metadata: Clipsmetadata;
  coauthor_producers: Igartist[];
  code: string;
  comment_count: number;
  comments_disabled: boolean;
  has_liked: boolean;
  id: string;
  image_versions: Imageversion[];
  is_paid_partnership: boolean;
  is_pinned: boolean;
  is_video: boolean;
  like_and_view_counts_disabled: boolean;
  like_count: number;
  location?: Location;
  media_name: string;
  media_type: number;
  play_count: number;
  product_type: string;
  resources: (Resource | Resources2)[];
  sponsor_tags: any[];
  tagged_users: Taggeduser[];
  taken_at: string;
  taken_at_ts: number;
  thumbnail_url?: string;
  title: string;
  user: User;
  video_duration: number;
  video_url?: string;
  video_versions: Videoversion[];
  view_count: number;
}
interface Taggeduser {
  user: User;
  x: number;
  y: number;
}
interface User {
  full_name: string;
  id: string;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_url: string;
  profile_pic_url_hd?: any;
  username: string;
}
interface Resources2 {
  carousel_parent_id: string;
  commerciality_status: string;
  id: string;
  image_versions: Imageversion[];
  media_type: number;
  product_type: string;
  taken_at: number;
  thumbnail_url: string;
  video_url?: any;
  video_versions: any[];
}
interface Resource {
  carousel_parent_id: string;
  commerciality_status: string;
  id: string;
  image_versions: Imageversion[];
  media_type: number;
  product_type: string;
  taken_at: number;
  thumbnail_url: string;
  video_url?: string;
  video_versions: Videoversion[];
}
interface Videoversion {
  height: number;
  id: string;
  type: number;
  url: string;
  width: number;
}
interface Location {
  address: string;
  category: string;
  city: string;
  external_id: string;
  external_id_source: string;
  hours: Hours;
  id: number;
  lat?: number;
  lng?: number;
  name: string;
  phone: string;
  website: string;
  zip?: any;
}
interface Hours {
}
interface Imageversion {
  height: number;
  url: string;
  width: number;
}
interface Clipsmetadata {
  achievements_info?: Achievementsinfo;
  additional_audio_info?: Additionalaudioinfo;
  asset_recommendation_info?: any;
  audio_canonical_id?: string;
  audio_ranking_info?: Audiorankinginfo;
  audio_type?: string;
  branded_content_tag_info?: Brandedcontenttaginfo;
  breaking_content_info?: any;
  breaking_creator_info?: any;
  challenge_info?: any;
  clips_creation_entry_point?: string;
  content_appreciation_info?: Contentappreciationinfo;
  contextual_highlight_info?: any;
  cutout_sticker_info?: any[];
  disable_use_in_clips_client_cache?: boolean;
  external_media_info?: any;
  featured_label?: any;
  is_fan_club_promo_video?: boolean;
  is_public_chat_welcome_video?: boolean;
  is_shared_to_fb?: boolean;
  mashup_info?: Mashupinfo;
  merchandising_pill_info?: any;
  music_info?: Musicinfo;
  nux_info?: any;
  original_sound_info?: Originalsoundinfo;
  originality_info?: any;
  professional_clips_upsell_type?: number;
  reels_on_the_rise_info?: any;
  reusable_text_attribute_string?: string;
  reusable_text_info?: Reusabletextinfo[];
  shopping_info?: any;
  show_achievements?: boolean;
  show_tips?: any;
  template_info?: Templateinfo;
  viewer_interaction_settings?: any;
}
interface Templateinfo {
  attribution_info: Attributioninfo;
  effects_info: Effectsinfo;
  min_num_segments: number;
  reusable_media_assets_info?: any;
  segments_info: Segmentsinfo[];
  should_hide_cta: boolean;
  smart_template_info?: any;
  template_clips_media_id: number;
  timed_stickers_info?: any;
  timed_texts_info: Timedtextsinfo;
  transition_effects_info: Transitioneffectsinfo[];
}
interface Transitioneffectsinfo {
  duration_in_ms: number;
  index: number;
  name: string;
  start_time_in_ms: number;
}
interface Timedtextsinfo {
  text_info_list: Reusabletextinfo[];
}
interface Segmentsinfo {
  duration_in_ms: number;
  reusable_template_media_asset_end_time_ms?: any;
  reusable_template_media_asset_start_time_ms?: any;
}
interface Effectsinfo {
  overall_effect_id?: any;
  segment_effects_info: any[];
}
interface Attributioninfo {
  image_versions?: any;
  owner_username: string;
  template_media_id: string;
}
interface Reusabletextinfo {
  alignment: string;
  colors: Color[];
  end_time_ms: number;
  font_size: number;
  height: number;
  id: number;
  is_animated: number;
  offset_x: number;
  offset_y: number;
  rotation_degree: number;
  scale: number;
  start_time_ms: number;
  text: string;
  text_emphasis_mode: string;
  text_format_type: string;
  width: number;
  z_index: number;
}
interface Color {
  count: number;
  hex_rgba_color: string;
}
interface Originalsoundinfo {
  allow_creator_to_rename: boolean;
  attributed_custom_audio_asset_id?: any;
  audio_asset_id: number;
  audio_asset_start_time_in_ms?: any;
  audio_filter_infos: any[];
  audio_parts: Audiopart[];
  audio_parts_by_filter: Audiopart[];
  can_remix_be_shared_to_fb: boolean;
  can_remix_be_shared_to_fb_expansion: boolean;
  consumption_info: Consumptioninfo;
  duration_in_ms: number;
  formatted_clips_media_count?: any;
  hide_remixing: boolean;
  ig_artist: Igartist;
  is_audio_automatically_attributed: boolean;
  is_eligible_for_audio_effects: boolean;
  is_eligible_for_vinyl_sticker: boolean;
  is_explicit: boolean;
  is_original_audio_download_eligible: boolean;
  is_reuse_disabled: boolean;
  is_xpost_from_fb: boolean;
  oa_owner_is_music_artist: boolean;
  original_audio_subtype: string;
  original_audio_title: string;
  original_media_id: number;
  overlap_duration_in_ms?: any;
  previous_trend_rank?: any;
  progressive_download_url: string;
  should_mute_audio: boolean;
  time_created: number;
  trend_rank?: any;
  xpost_fb_creator_info?: any;
}
interface Consumptioninfo {
  display_media_id?: any;
  is_bookmarked: boolean;
  is_trending_in_clips: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type?: any;
}
interface Audiopart {
  audio_canonical_id: string;
  audio_start_time_in_ms: number;
  audio_type: string;
  display_artist: string;
  display_title: string;
  duration_in_ms: number;
  is_bookmarked: boolean;
  is_eligible_for_audio_effects: boolean;
  is_explicit: boolean;
  parent_start_time_in_ms: number;
  thumbnail_uri: string;
  ig_artist?: Igartist;
}
interface Musicinfo {
  music_asset_info: Musicassetinfo;
  music_consumption_info: Musicconsumptioninfo;
}
interface Musicconsumptioninfo {
  allow_media_creation_with_music: boolean;
  audio_asset_start_time_in_ms: number;
  audio_filter_infos: any[];
  audio_muting_info: Audiomutinginfo;
  contains_lyrics?: any;
  derived_content_id?: any;
  display_labels?: any;
  formatted_clips_media_count?: any;
  ig_artist: Igartist;
  is_bookmarked: boolean;
  is_trending_in_clips: boolean;
  overlap_duration_in_ms: number;
  placeholder_profile_pic_url: string;
  previous_trend_rank?: any;
  should_allow_music_editing: boolean;
  should_mute_audio: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type?: any;
  trend_rank?: any;
}
interface Igartist {
  full_name: string;
  id: string;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  username: string;
}
interface Audiomutinginfo {
  allow_audio_editing: boolean;
  mute_audio: boolean;
  mute_reason_str: string;
  show_muted_audio_toast: boolean;
}
interface Musicassetinfo {
  allows_saving: boolean;
  artist_id: string;
  audio_asset_id: string;
  audio_id: string;
  cover_artwork_thumbnail_uri: string;
  cover_artwork_uri: string;
  dark_message?: any;
  display_artist: string;
  duration_in_ms: number;
  fast_start_progressive_download_url: string;
  has_lyrics: boolean;
  highlight_start_times_in_ms: number[];
  id: string;
  ig_username: string;
  is_eligible_for_audio_effects: boolean;
  is_eligible_for_vinyl_sticker: boolean;
  is_explicit: boolean;
  lyrics?: any;
  progressive_download_url: string;
  reactive_audio_download_url?: any;
  sanitized_title?: any;
  subtitle: string;
  title: string;
  web_30s_preview_download_url?: any;
}
interface Mashupinfo {
  can_toggle_mashups_allowed: boolean;
  formatted_mashups_count?: any;
  has_been_mashed_up: boolean;
  has_nonmimicable_additional_audio: boolean;
  is_creator_requesting_mashup: boolean;
  is_light_weight_check: boolean;
  is_light_weight_reuse_allowed_check: boolean;
  is_pivot_page_available: boolean;
  is_reuse_allowed: boolean;
  mashup_type?: any;
  mashups_allowed: boolean;
  non_privacy_filtered_mashups_media_count: number;
  original_media?: any;
  privacy_filtered_mashups_media_count?: any;
}
interface Contentappreciationinfo {
  enabled: boolean;
  entry_point_container?: Entrypointcontainer;
}
interface Entrypointcontainer {
  comment: Comment;
  overflow?: any;
  pill: Pill;
  ufi?: any;
}
interface Pill {
  action_type: string;
  priority: number;
}
interface Comment {
  action_type: string;
}
interface Brandedcontenttaginfo {
  can_add_tag: boolean;
}
interface Audiorankinginfo {
  best_audio_cluster_id: string;
}
interface Additionalaudioinfo {
  additional_audio_username?: any;
  audio_reattribution_info: Audioreattributioninfo;
}
interface Audioreattributioninfo {
  should_allow_restore: boolean;
}
interface Achievementsinfo {
  num_earned_achievements?: any;
  show_achievements: boolean;
}