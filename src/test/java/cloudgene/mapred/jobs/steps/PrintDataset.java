package cloudgene.mapred.jobs.steps;

import java.util.Map;

import genepi.hadoop.common.WorkflowContext;
import genepi.hadoop.common.WorkflowStep;

public class PrintDataset extends WorkflowStep {

	@Override
	public boolean run(WorkflowContext context) {

		Map<String, Object> dataset = (Map<String, Object>) context.getData("dataset");

		System.out.println(dataset);
		
		context.ok("Metafile: " + dataset.get("metafile"));
		System.out.println(dataset.get("metafile"));

		Map<String, String> populations = (Map<String, String>) dataset.get("populations");

		return populations.get("eur").equals("EUR");
	}

}
