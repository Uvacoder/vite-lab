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
  ]);

  return {
    experiments,
  };
}
