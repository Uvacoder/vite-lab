import { ref, Ref } from 'vue';

export interface Experiment {
  name: string;
  route: string;
  icon?: string;
  tags?: string[];
}

interface ExperimentsComposition {
  experiments: Ref<Experiment[]>;
}

export function useExperiments(): ExperimentsComposition {
  const experiments = ref([
    {
      name: 'Modal',
      icon: 'fa:home',
      route: './modal',
      tags: ['teleport', 'useClickOutside'],
    },
    {
      name: 'Battery',
      icon: 'carbon:battery',
      route: './battery',
      tags: ['svg', 'useBattery'],
    },
    {
      name: 'Fancy Clock',
      icon: 'carbon:clock',
      route: './fancy-clock',
      tags: ['useNow'],
    },
  ]);

  return {
    experiments,
  };
}
